
# EP Map

## Introduction

The main purpose of this project is to show us the location, linkedin and a couple tags for Commit's EP (Engineering Partner).The EP are located all around the world and have a very diverse skill set, this project will allow you to explore a part of Commit with a map.The location of the EP is based on their city, not their exact location.This map will include the HQ location of the SP (Startup Partner) and their main stack

## Architecture

We will try to keep it simple based on the main requirements, we are going to use a SPA for the frontend and a couple Rest endpoints for the backend.The SPA will be using Commit's App playground, we will use the React and NextJS static bundle providedFor the backend we will use Go with Commit's App playground for the backend endpoints and authentication

## Frontend

For this first iteration we are going to have a single page with the map 
- For anonymous users: This will be a simple form to request for a password
- For authenticated users: We will redirect the users to the map page

## Auth

We will try to keep the auth mechanism simple as well, we are just going to ask for the email of the anonymous user, if the user is present in our list of valid users we are going to send them a validation link.
Once they follow the validation link we will send them an auth cookie (or jwt) to continue their authenticated session.


## Backend

Expected endpoints:
- /list: List the EPs for authenticated users
- /login: Check and send email to authorized users
- /validate: Verify the link and set the auth cookie

# Clean architecture iterations

Iteration V1

Entities
- EP
  - id
  - imageUrl
  - name
  - linkedInUrl
  - tags
  - location
  - latitude
  - longitude
  

Use Cases

- List
Get a simple list of the EPs from a postgres database.

- Login
Get an email as input and compare to an internal list of emails, if the email is present returna auth cookie to let the user see the content


Iteration V2
- Place
  - id
  - name
  - latitude
  - longitude
  - tags

Use cases
- Tags
- TBD



# App playground instructions

This template is designed to work with sites that can be distributed as static sites only (hosted on AWS S3)

This repository makes the assumption your frontend is Node.js based, please see the [CI's build steps][ci-build] and make changes according to your needs.

The CI runs the following steps:
- Unit test
- build static site
- sync with s3 bucket for your project domain


[ci-build]: ../../.github/workflows/ci.yml#L9-L45