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
        null=True,
        blank=True,
        on_delete=models.CASCADE,
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
        "home.Dosages",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="indications_dosages",
    )


class Dosages(models.Model):
    "Generated Model"
    type = models.CharField(
        max_length=64,
    )
    isWeightAdjusted = models.BooleanField(
        null=True,
        blank=True,
    )
    isContinuous = models.BooleanField(
        null=True,
        blank=True,
    )
    doseLow = models.DecimalField(
        max_digits=30,
        decimal_places=10,
        null=True,
        blank=True,
    )
    doseHigh = models.DecimalField(
        max_digits=30,
        decimal_places=10,
        null=True,
        blank=True,
    )
    doseMax = models.DecimalField(
        max_digits=30,
        decimal_places=10,
        null=True,
        blank=True,
    )
    unitBase = models.CharField(
        max_length=16,
        null=True,
        blank=True,
    )
    unitHourly = models.CharField(
        max_length=16,
        null=True,
        blank=True,
    )
    multiplierHourly = models.DecimalField(
        max_digits=30,
        decimal_places=10,
        null=True,
        blank=True,
    )
    frequency = models.CharField(
        max_length=64,
        null=True,
        blank=True,
    )
