from django.contrib import admin

from suggestions.models import Suggestion, Comment

admin.site.register(Suggestion)
admin.site.register(Comment)
