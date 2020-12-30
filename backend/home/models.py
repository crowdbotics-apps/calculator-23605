from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """

    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """

    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Medications(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    tradename = models.CharField(
        max_length=256,
    )
    mechanism = models.TextField()
    interactions = models.TextField()
    indications = models.OneToOneField(
        "home.Indications",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="medications_indications",
    )


class Indications(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    title = models.CharField(
        max_length=256,
    )
    info = models.TextField()
    dosages = models.OneToOneField(
        "home.CustomText",
        on_delete=models.CASCADE,
        related_name="indications_dosages",
    )
