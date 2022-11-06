<template>
    <div>
        <h1>publish</h1>
        <PublishEditor/>
    </div>

</template>

<script>
import PublishEditor from "@/pages/markdown/PublishEditor";

export default {
    name: "Publish",
    components: {PublishEditor}
};
</script>