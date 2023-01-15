<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :style="selectedTab === 'stored-resources' ? 'border-style:solid; border-width:2px; border-color: #270041;':'background-color:white; color:black;' ">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :style="selectedTab === 'add-resource' ? 'border-style:solid; border-width:2px; border-color: #270041;':'background-color:white; color:black;' ">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
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
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource,
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>