<template>
    <v-app>
        <div>
            <v-toolbar>
                <v-toolbar-title>Mini-Project_02</v-toolbar-title>

                <div class="flex-grow-1"></div>

                <v-toolbar-items>
                    <v-btn href="#/user" text>User</v-btn>
                    <v-btn href="#/worktime" text>Working Time</v-btn>
                    <v-btn href="#/worktimes" text>Working Times</v-btn>
                    <v-btn href="#/clock" text>Clock Manager</v-btn>
                    <v-btn href="#/chart" text>Chart Manager</v-btn>
                </v-toolbar-items>

            </v-toolbar>
        </div>

        <router-view/>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        data: () => ({
            //
        }),
    };
</script>
