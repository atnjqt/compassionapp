# Microsoft Azure Cognitive Services Face API

For more info, see here: [https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account-cli?tabs=windows#prerequisites]

- to create your cognitive resource for existing resource group

    ```bash
    az login

    az cognitiveservices account create \   
        --name face-resource \
        --resource-group asc-etienne-rg \
        --kind Face \
        --sku F0 \
        --location eastus \
        --yes
    ```

- add your `COGNITIVE_SERVICE_KEY` to [.env](../../../.env) from the following:

    ```bash
    az cognitiveservices account keys list \
        --name face-resource \
        --resource-group asc-etienne-rg
    ```

        ```diff
        + COGNITIVE_SERVICE_KEY=3e1a0.....4a76de
        + COGNITIVE_SERVICE_ENDPOINT=https://eastus.api.cognitive.microsoft.com/
        ```