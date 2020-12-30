from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CustomTextViewSet,
    DosagesViewSet,
    HomePageViewSet,
    IndicationsViewSet,
    MedicationsViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)
router.register("medications", MedicationsViewSet)
router.register("indications", IndicationsViewSet)
router.register("dosages", DosagesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
