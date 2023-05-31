

from django.urls import path, include

# rest_framework
from rest_framework import routers
from App import views
router = routers.DefaultRouter()
router.register(r'category', views.CategoryViewset, basename='api_category')
router.register(r'prescription', views.PrescriptionViewSet, basename='api_prescription')
router.register(r'file', views.FileViewset, basename='api_file')
router.register(r'user', views.UserViewset, basename='api_user')


# swagger/redoc
from django.urls import include, path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="MenuApp API",
        default_version='ver 1.0',
        description="API documentation",
        # terms_of_service="https://www.example.com/policies/terms/",
        terms_of_service="https://www.termsofservicegenerator.net/live.php?token=2osovODN2S0I3urRQYV6YKp8etpttYXF",
        # contact=openapi.Contact(email="viton4ik@gmail.com"),
        contact=openapi.Contact(
            name="Victor",
            url="https://github.com/Viton4ik",
            email="viton4ik@gmail.com",
        ),
        # license=openapi.License(
        #     name="BSD License",
        #     url="https://www.example.com/licenses/bsd/"
        # ),
        license=openapi.License(
            name="MIT License",
            url="https://opensource.org/licenses/MIT",
        ),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('api/', include(router.urls), name='api'),

]
