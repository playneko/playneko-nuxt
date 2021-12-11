<template>
  <div>
    <vue-ads-table-tree
      :columns="columns"
      :rows="rows"
      :call-children="callChildren"
    >
      <template slot="lastName" slot-scope="props">
        {{ props.columns.title }}
      </template>
      <template slot="firstName" slot-scope="props">
        <a :href="`https://www.google.com/search?q=${props.row.firstName}+${props.row.lastName}`"
        target="_blank">{{props.row.firstName}}</a>
      </template>
      <template slot="lastName" slot-scope="props">
        {{ props.row.lastName }}
      </template>
    </vue-ads-table-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          property: 'firstName',
          title: 'First Name',
          direction: null,
          _hasChildren: true,
        },
        {
          property: 'lastName',
          title: 'Last Name',
          direction: null,
          collapseIcon: true,
          _hasChildren: true,
        },
      ],
      rows: [
        {
            firstName: 'Josephine',
            lastName: 'Astrid',
            _hasChildren: true,
        },
        {
            firstName: 'Boudewijn',
            lastName: 'Van Brabandt',
            _hasChildren: true,
        },
        {
            firstName: 'Albert II',
            lastName: 'Van Belgie1',
            _hasChildren: true,
            _children: [],
        },
        {
          firstName: 'Alexander',
          lastName: 'Van Belgie',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Christine',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Esmeralda',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
        {
          firstName: 'Alexander',
          lastName: 'Van Belgie',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Christine',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Esmeralda',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
        {
          firstName: 'Alexander',
          lastName: 'Van Belgie',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Christine',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
        {
          firstName: 'Marie-Esmeralda',
          lastName: 'Leopoldine',
          _hasChildren: true,
        },
      ],
    }
  },
  created () {
    this.rows.length = 10
  },
  mounted() {
    const domFilter = this.$el.querySelector('.vue-ads-flex.vue-ads-py-3')
    const domFooter = this.$el.querySelector('.vue-ads-flex.vue-ads-m-2.vue-ads-px-0.vue-ads-text-xs')
    domFilter.remove()
    domFooter.remove()
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async callChildren (parent) {
      await this.sleep(1000);
      let array = []
      if (parent.lastName === 'Van Belgie1') {
        array = [
          {
            firstName: 'Filip',
            lastName: 'Van Belgie2',
            _hasChildren: true,
            _children: [],
          },
          {
            firstName: 'Astrid',
            lastName: 'Van Belgie',
            _hasChildren: true,
          },
          {
            firstName: 'Laurent',
            lastName: 'Van Belgie',
            _hasChildren: true,
          },
        ]
      } else if (parent.lastName === 'Van Belgie2') {
        array = [
          {
            firstName: 'Elisabeth',
            lastName: 'Van Brabant',
            _hasChildren: true,
          },
          {
            firstName: 'Gabriel',
            lastName: 'Boudwijn',
            _hasChildren: true,
          },
          {
            firstName: 'Emmanuel',
            lastName: 'Van Belgie',
            _hasChildren: true,
          },
          {
            firstName: 'Eleonore',
            lastName: 'Boudwijn',
            _hasChildren: true,
          },
        ]
      }
      return array
    },
  }
}
</script>

<style lang="scss">
table.vue-ads-w-full th {
  width: 300px;
}
th.vue-ads-text-left {
  color: #00000099 !important;
}
i.fa.fa-sort, i.fa.fa-sort-up, i.fa.fa-sort-down {
  color: #ffffff !important;
}
th.vue-ads-text-left:hover, th.vue-ads-text-left:hover i {
  color: #000000 !important;
}
th.vue-ads-text-left > div.vue-ads-flex {
  display: unset !important;
}
.fa.fa-plus-square::before, .fa.fa-minus-square,
  .fa.fa-sort::before, .fa.fa-sort-up::before,
  .fa.fa-sort-down::before {
  line-height: 1;
  text-indent: 0;
  user-select: none;
  position: relative;
  align-items: center;
  line-height: inherit;
  text-rendering: auto;
  display: inline-block;
  letter-spacing: normal;
  vertical-align: middle;
  justify-content: center;
  font-feature-settings: "liga";
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
}
.fa.fa-plus-square::before, .fa.fa-minus-square::before {
  font-size: 22px;
  color: #00000099 !important;
  font: normal normal normal 22px/1 "Material Design Icons";
}
.fa.fa-sort::before, .fa.fa-sort-up::before, .fa.fa-sort-down::before {
  font-size: 15px;
  font: normal normal normal 15px/1 "Material Design Icons" !important;
}
.fa-plus-square::before {
  content: "\F035F";
}
.fa-minus-square::before {
  content: "\F035D";
}
.fa-sort::before {
  content: "\F0E79";
}
.fa.fa-sort-up::before {
  content: "\F005D";
}
.fa.fa-sort-down::before {
  content: "\F0045";
}
.vue-ads-pr-2 {
  padding-right: 0px;
}
</style>