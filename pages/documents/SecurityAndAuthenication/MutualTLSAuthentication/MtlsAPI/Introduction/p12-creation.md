---
pagename: Creating a P12 File
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
indicator: both
permalink: mtls-creating-a-p12-file.html
---


## General explanation

The following is a step by step walkthrough on how to create a certificate to work with MTLS Api.

**This refers to certificate creation by Mac-OS.**

**Some of the steps to QA environment (those steps will be marked).**

## Create Certificate authority (QA relevant, in production the CA is external)
Code creates a Des3 4Mb encryption.
```
openssl genrsa -des3 -out {caKeyName}.key 4096
```

## Create a CA certificate (QA related)
365 days till expiration, can be changed.

```
openssl req -new -x509 -days 365 -key {caKeyName}.key -out {caCertName}.crt
```

Answer the question popping the screen, Notice that domain name must match the domain it is defending, this can be left empty (or matching domain).

## Create client certificate (all environments)
Create key (Des3, 4Mb)
```
openssl genrsa -des3 -out {keyName}.key 4096
```

## create CSR (All environments)
```
openssl req -new -key {keyName}.key -out {csrName}.csr
```

## Sign the CSR (QA related)
**In production environment this will be done by the customer, submitted to an external Certificate Authority.**

```
openssl x509 -req -days 365 -in {csrName}.csr -CA {caCertName}.crt -CAkey {caKeyName}.key -set_serial 01 -out {clientCertificateName}.crt
```

## Creating a p12 file (All environments)
**This is the final product uploaded into our system**

```
openssl pkcs12 -export -out {p12Name}.{p12/pfx} -inkey {privateKeyName}.key -in {certificateName}.crt
```
