<script context="module">
    export async function load({ url, params }) {
        console.log(params)
        const apiUrl = `${url.origin}/${params.id}.json`
        const res = await fetch(apiUrl)
        if (!res.ok) {
            return
        }
        const redirect_data = await res.json()
        console.log(redirect_data['items'])
        return {
            status: 301,
            redirect: redirect_data.items[0].redirect_to_url
        };
    }
</script>