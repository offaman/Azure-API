const azure_identity = require('@azure/identity')
const az_key_vault = require('@azure/keyvault-secrets')
const vaultUrl = require('../config/azureConfig')


async function secretinfo(secretName){
    const credential = new azure_identity.DefaultAzureCredential();
    const client = new az_key_vault.SecretClient(vaultUrl.vaultUrl,credential)
    const user = await client.getSecret(secretName)
    return user.value
}

module.exports = {secretinfo}