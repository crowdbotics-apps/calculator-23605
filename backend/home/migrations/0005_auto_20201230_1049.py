# Generated by Django 2.2.17 on 2020-12-30 10:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20201230_1042'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dosages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=64)),
            ],
        ),
        migrations.AlterField(
            model_name='indications',
            name='dosages',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='indications_dosages', to='home.Dosages'),
        ),
    ]
