<template>
    <div class="publish">
        <PublishTitle/>
        <PublishContext/>
    </div>

</template>

<script>
import PublishEditor from "@/components/editor/PublishEditor";
import PublishTitle from "@/components/publish/PublishTitle";
import PublishContext from "@/components/publish/PublishContext";

export default {
    name: "Publish",
    components: {PublishEditor, PublishTitle, PublishContext},
    props: [],
    data() {
        return {
            title: ""
        }
    },
    methods: {},
    mounted() {
        document.getElementsByTagName('title')[0].text = '发布';
        document.getElementsByClassName('el-main')[0].style.background = 'rgba(240, 240, 240, 0.8)';

    }
};
</script>

<style scoped>
.publish {
    position: relative;
    top: 0px;
    /*background: rgba(240, 240, 240, 0.8);*/
    z-index: 1;
    padding: 10px 20px 0 20px;
}




</style>