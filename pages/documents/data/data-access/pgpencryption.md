---
title: PGP Encryption
level1: Documents
level2: Data
level3: Data Access API

order: 61
permalink: data-data-access-pgp-encryption.html

indicator: both
---

Data Access provides customers with the ability to encrypt their sensitive data using PGP encryption. The data of the customer must be encrypted by our own encryption in LP storages. For the Data Access API we are offering the ability to encrypt this data using PGP encryption.

### How to Use PGP Encryption

In order to use this functionality, the customer must provide LivePerson with a public key in the following format: RSA 4096-bit (below you can find the exact procedure for how to do that).

LivePerson will decrypt the original encrypted data using LP keys and re-encrypt it using the customer public key by using the following algorithm:

1. Symmetric encryption - AES-256

2. Digest - SHA-512

3. Compressed

4. Encoding the message on Radix-64 (armor format)

The customer will receive the Data Access files in the usual JSON format and will need to decrypt the encrypted data using the private key pair. Each encrypted record will come attached with the public key to help with tacking the right pair of keys.

### How to Create a Public Key with PGP

* pgp --version
	
	* Verify you are using pgp 1.4.10 or higher

* pgp --gen-key -a

	* Choose RSA (1)

	* Choose key length 4096

	* Choose key not expire (0)

	* Input real name, email, comment

	* Enter passphrase

* Verify your pgp is configured to avoid SHA-1

Once the key is created, please contact LivePerson support and pass it to them. They will need to validate it, to make sure it meets LivePerson security standards.