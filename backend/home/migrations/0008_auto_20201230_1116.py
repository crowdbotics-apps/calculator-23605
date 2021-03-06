# Generated by Django 2.2.17 on 2020-12-30 11:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_parameters'),
    ]

    operations = [
        migrations.AlterField(
            model_name='indications',
            name='dosages',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='indications_dosages', to='home.Dosages'),
        ),
        migrations.AlterField(
            model_name='medications',
            name='indications',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='medications_indications', to='home.Indications'),
        ),
    ]
