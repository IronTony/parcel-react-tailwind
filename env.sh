#!/bin/bash

# Input file path
if [ -z $1 ]; then
    INFILE=".env"
else
    INFILE=$1
fi

# Output file path
if [ -z $2 ]; then
    OUTFILE="./public/env.js"
else
    OUTFILE=$2
fi

# Recreate config file
rm -rf $OUTFILE
touch $OUTFILE

# Add assignment
echo "window.__env__ = {" >> $OUTFILE

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")

  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> $OUTFILE
done < $INFILE

echo "}" >> $OUTFILE
