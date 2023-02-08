from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import BlogPost
from blog.serializers import BlogPostSerializer
from rest_framework import permissions
from django.views.generic import ListView, DetailView
# Create your views here.

class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

class BlogPostCategoryView(APIView):

    # queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    # lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = BlogPost.objects.order_by('-date_created').filter(category__iexact=category)
        serializer = BlogPostSerializer(queryset, many=True)
        return Response(serializer.data)

# class ArticlePostListView(ListView):
#     template_name = 'home.html'
#     queryset = BlogPost.objects.all().filter(featured=True)
#     context_object_name = 'featured'
#     #extra_context={'featured': BlogPost.objects.all().filter(featured=True)}

# def articlelist(request):
#     feat = BlogPost.objects.all().filter(featured=True)
#     context = {'feat':feat}
#     #print(context)
#     return render(request, 'home.html', context)
