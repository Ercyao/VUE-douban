<template>
  <div class="page">
    <headerNav></headerNav>
    <div v-show="!showLoading">
      <template v-for="item in Groups">
        <team-box :key="item.name"
                  :title="item.name"
                  type="groupsCover"
                  :items="item.groups"></team-box>
      </template>
      <drown-app></drown-app>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import teamBox from '@/components/team'
import loading from '@/components/loading'
import headerNav from '@/components/header'
import drownApp from '@/components/drownapp'
import { getGroups } from '@/store/API'

export default {
  data () {
    return {
      showLoading: true,
      Groups: []
    }
  },
  components: {
    headerNav,
    drownApp,
    loading,
    teamBox
  },
  created () {
    this.getGroupData()
  },
  methods: {
    async getGroupData () {
      await this.getGroupsApi()

      this.hideLoading()
    },
    // 获取小组
    async getGroupsApi () {
      let data = await getGroups().then(res => res.json())
      this.Groups = data.rec_groups[0].classified_groups
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style>
</style>
