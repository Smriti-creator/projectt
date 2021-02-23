<template>
  <div class="pt-12">
    <div class="table-container pt-12">
      <table class="table table is-striped">
        <thead>
          <tr>
            <th style="width: 10px;"></th>
            <th id="title_or_profile">PROFILE</th>
            <th>STATUS</th>
            <th>ACTION</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="internships_tbody" style="display: table-row-group;">
          <tr
            id="1"
            sort_by=""
            sort_by_e=""
            internship_type=""
            employment_type="internship"
          >
            <td></td>
            <td id="profileColumn" class="profileColumn">
              A
            </td>
            <td class="status statusColumn" id="statusColumn">
              <span class="badge badge-pill needs-attention" title="">B</span>
              <div class="status_tooltip_content"></div>
            </td>
            <td class="applicationCountColumn">
              <router-link to="/job">
                <button class="btn btn-primary">Review internship</button>
              </router-link>
            </td>
            <td class="mobile_action_column">
              <i class="is-icon-view-s"></i>View/Edit internship
            </td>
            <button class="btn" data-toggle="dropdown" aria-expanded="true">
              <i class="fas fa-spinner fa-pulse"></i>
            </button>
            <div
              style="
                position: absolute;
                transform: translate3d(-168px, 32px, 0px);
                top: 0px;
                left: 0px;
                will-change: transform;
              "
              x-placement="bottom-end"
            >
              <router-link to="/home">
                <button class="dropdown-item">
                  <i class="fas fa-info-circle"></i>View/Edit internship
                </button></router-link
              >
            </div>
          </tr>
        </tbody>
      </table>
    </div>
    <Foot />
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";
export default {
  components: {
    Foot
  }
};
</script>
<style scoped>
.table-container table thead {
  border: none;
  background: #f8f8f8;
  font-size: 12px;
  vertical-align: middle;
  font-weight: 600;
}
</style>
