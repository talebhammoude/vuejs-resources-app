<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :style="selectedTab === 'stored-resources' ? 'border-style:solid; border-width:2px; border-color: #640032;':null ">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :style="selectedTab === 'add-resource' ? 'border-style:solid; border-width:2px; border-color: #640032;':null ">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue'; 
import AddResource from './AddResource.vue'; 

export default {
    components: {
        StoredResources,
        AddResource,
    },
    data(){
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                    {
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The official Vue.js documentation.',
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn how to google ...',
                        link: 'https://google.se'
                    },
                ]
        }
    },
    provide (){
        return {
            resources: this.storedResources
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>