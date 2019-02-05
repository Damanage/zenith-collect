<template>
    <v-container
          fill-height
          fluid
          grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <v-bottom-sheet v-model="sheet">
                    <v-btn
                        slot="activator"
                        color="purple"
                        dark
                    >
                        Click me
                    </v-btn>

                    <v-list>
                        <v-subheader>Open in</v-subheader>
                        <v-list-tile
                        v-for="tile in tiles"
                        :key="tile.title"
                        @click="sheet = false"
                        >
                        <v-list-tile-avatar>
                            <v-avatar size="32px" tile>
                            <img
                                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                :alt="tile.title"
                            >
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-bottom-sheet>
                <div class="test">
                    no better place than 127.0.0.1
                    <chartist
                    ratio="ct-major-second"
                    type="Line"
                    :data="chartData"
                    :options="chartOptions" >
                </chartist>
                </div>
                
            </v-flex>
        </v-layout>
    </v-container>
    
</template>
<script>
export default {
    data: () => ({
        chartData: {
            labels: ["A", "B", "C"],
            series:[[1, 3, 2], [4, 6, 5]]
        },
        chartOptions: {
            lineSmooth: true
        },
        sheet: false,
        tiles: [
            { img: 'keep.png', title: 'Keep' },
            { img: 'inbox.png', title: 'Inbox' },
            { img: 'hangouts.png', title: 'Hangouts' },
            { img: 'messenger.png', title: 'Messenger' },
            { img: 'google.png', title: 'Google+' }
        ]
    })
}
</script>
<style>
    .test{
        background-color: #fff;
    }
</style>

