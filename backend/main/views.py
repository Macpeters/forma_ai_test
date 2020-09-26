from django.http import JsonResponse
from typing import List, Union
from django.db.models import Sum, Q
from .models import EmployeeRelation, SalesLines
from datetime import datetime
from backend.helpers import date_range_intersect
import json

def get_revenue_by_sales_rep(request, user_id):
    # get the user
    user = EmployeeRelation.objects.get(id=user_id)

    reports = EmployeeRelation.objects.filter(reporting_to=user.employee)
    if reports.count() > 0:
        data = []
        for report in reports:
            sub_reports = EmployeeRelation.objects.filter(reporting_to=report.employee)
            # this is the director - we want all the reps for all the managers reporting to them
            if sub_reports.count() > 0:
                for sub_report in sub_reports:
                    data.append(format_rep_data(sub_report.employee))
            else:
                # this a manager - we want all the reps that report to them
                data.append(format_rep_data(report.employee))
    else:
        # this is a sales rep - we just want their data
        data = sales_rep_revenue(user.employee)

    jsonData = json.dumps(data)
    return JsonResponse({"revenue": jsonData})

def sales_rep_revenue(employee):
    data = []
    queryset = SalesLines.objects.filter(rep=employee)
    for salesline in queryset:
        data.append({"id": salesline.id, "revenue": salesline.revenue})
    return data

def format_rep_data(employee):
    return {
        "first_name": employee.first_name,
        "last_name": employee.last_name,
        "sales": sales_rep_revenue(employee)
    }
