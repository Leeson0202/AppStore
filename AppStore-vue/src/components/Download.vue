<template>
    <div class="download">
        <DownloadLabel></DownloadLabel>
        <DownloadTable></DownloadTable>
    </div>
</template>


<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import DownloadTable from "@/pages/downlowad/DownloadTable";
import DownloadLabel from "@/pages/downlowad/DownloadLabel";

export default {
    name: "Download",
    components: {DownloadTable, DownloadLabel},

    data() {
        return {
            keyword: '',
        }
    },
    computed: {
        ...mapState("DownloadAbout", ['types', 'typeNames', 'labels', "labelNames"]),
    },
    watch: {},
    methods: {},
    mounted() {
        // console.log(this.$route.query.keyword);
    },
    updated() {
        // console.log(this.$route.query.keyword);

        // console.log('updated')
    }

};
</script>
