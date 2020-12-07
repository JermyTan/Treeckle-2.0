from django.db import models
from treeckle.common.models import TimestampedModel

# Create your models here.
class Organization(TimestampedModel):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class ThirdPartyAuthenticator(models.TextChoices):
    NONE = "NONE"
    GOOGLE = "GOOGLE"
    NUSNET = "NUSNET"


class Role(models.TextChoices):
    ADMIN = "ADMIN"
    ORGANIZER = "ORGANIZER"
    RESIDENT = "RESIDENT"


class User(TimestampedModel):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    third_party_authenticator = models.CharField(
        max_length=50,
        choices=ThirdPartyAuthenticator.choices,
        default=ThirdPartyAuthenticator.NONE,
    )
    third_party_id = models.CharField(max_length=100, unique=True)
    role = models.CharField(max_length=50, choices=Role.choices, default=Role.RESIDENT)

    def __str__(self):
        return f"{self.name} ({self.organization})"

    class Meta:
        ordering = ["role", "name"]


class UserInvite(TimestampedModel):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=Role.choices, default=Role.RESIDENT)

    def __str__(self):
        return f"{self.email} ({self.organization})"

    class Meta:
        ordering = ["role", "email"]
