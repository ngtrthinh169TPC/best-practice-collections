#!/bin/bash

# https://stackoverflow.com/questions/24112727/relative-paths-based-on-file-location-instead-of-current-working-directory

current_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
echo $current_path