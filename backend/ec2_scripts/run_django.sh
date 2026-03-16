#!/bin/bash -x

source ~/.bashrc

export PATH=/data/miniconda3/bin:$PATH

repeatome_dir=/data/repeatome

cd $repeatome_dir

conda init bash
conda activate repeatome

export DJANGO_SETTINGS_MODULE=config.settings.ec2


python backend/manage.py runserver 0.0.0.0:8000

