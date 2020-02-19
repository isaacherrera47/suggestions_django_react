from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Suggestion(models.Model):
    SUGGESTION_CATEGORIES = [('HR', 'Human Resources'), ('O', 'Office'), ('F', 'Food'), ('G', 'General')]

    text = models.TextField(max_length=500)
    type = models.CharField(choices=SUGGESTION_CATEGORIES, max_length=10, blank=False, null=False)


class Comment(models.Model):
    suggestion = models.ForeignKey(Suggestion, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
