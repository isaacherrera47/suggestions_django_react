import json

from django.http import JsonResponse
# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from suggestions.models import SUGGESTION_CATEGORIES, Suggestion


def get_categories(request):
    categories = list(map(lambda v: {'id': v[0], 'name': v[1]}, SUGGESTION_CATEGORIES))
    return JsonResponse(categories, safe=False)


@csrf_exempt
def save_category(request):
    data = json.loads(request.body.decode('utf-8'))
    suggestion = Suggestion()
    suggestion.__dict__.update(data)
    try:
        suggestion.save()
    except:
        return JsonResponse({'status': False}, status=400)

    return JsonResponse({'status': True})
