#!/bin/bash

repeatome_dir=/data/repeatome

cd $repeatome_dir

conda activate repeatome

export DJANGO_SETTINGS_MODULE=config.settings.ec2


python backend/manage.py runserver 0.0.0.0:8000

