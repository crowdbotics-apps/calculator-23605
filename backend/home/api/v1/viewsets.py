from rest_framework import viewsets
from rest_framework import authentication
from .serializers import (
    CustomTextSerializer,
    DosagesSerializer,
    HomePageSerializer,
    IndicationsSerializer,
    MedicationsSerializer,
    ParametersSerializer,
)
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
)
from home.models import (
    CustomText,
    Dosages,
    HomePage,
    Indications,
    Medications,
    Parameters,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class MedicationsViewSet(viewsets.ModelViewSet):
    serializer_class = MedicationsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Medications.objects.all()


class IndicationsViewSet(viewsets.ModelViewSet):
    serializer_class = IndicationsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Indications.objects.all()


class DosagesViewSet(viewsets.ModelViewSet):
    serializer_class = DosagesSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Dosages.objects.all()


class ParametersViewSet(viewsets.ModelViewSet):
    serializer_class = ParametersSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Parameters.objects.all()
