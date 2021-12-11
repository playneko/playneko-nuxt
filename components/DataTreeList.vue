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
          isChildren: true,
        },
        {
          property: 'lastName',
          title: 'Last Name',
          direction: null,
          collapseIcon: true,
          isChildren: true,
        },
      ],
      rows: [
        {
            firstName: 'Josephine',
            lastName: 'Astrid',
            _hasChildren: true,
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Boudewijn',
            lastName: 'Van Brabandt',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Albert II',
            lastName: 'Van Belgie1',
            isOpen: false,
            isChildren: true,
            _children: [
                {
                    firstName: 'Filip',
                    lastName: 'Van Belgie2',
                    isOpen: false,
                    isChildren: true,
                    _children: [
                        {
                            firstName: 'Elisabeth',
                            lastName: 'Van Brabant',
                            isOpen: false,
                            isChildren: true,
                        },
                        {
                            firstName: 'Gabriel',
                            lastName: 'Boudwijn',
                            isOpen: false,
                            isChildren: true,
                        },
                        {
                            firstName: 'Emmanuel',
                            lastName: 'Van Belgie',
                            isOpen: false,
                            isChildren: true,
                        },
                        {
                            firstName: 'Eleonore',
                            lastName: 'Boudwijn',
                            isChildren: true,
                            _hasChildren: true,
                        },
                    ],
                },
                {
                    firstName: 'Astrid',
                    lastName: 'Van Belgie',
                    isOpen: false,
                    isChildren: true,
                },
                {
                    firstName: 'Laurent',
                    lastName: 'Van Belgie',
                    isOpen: false,
                    isChildren: true,
                },

            ],
        },
        {
            firstName: 'Alexander',
            lastName: 'Van Belgie',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Christine',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Esmeralda',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Alexander',
            lastName: 'Van Belgie',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Christine',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Esmeralda',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Alexander',
            lastName: 'Van Belgie',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Christine',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
        },
        {
            firstName: 'Marie-Esmeralda',
            lastName: 'Leopoldine',
            isOpen: false,
            isChildren: true,
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
    isMenu (item) {
      item.isOpen = !item.isOpen
      item._children && item._children.length > 0 ? item.isChildren = true : item.isChildren = false
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async callChildren (parent) {
      await this.sleep(1000);
      return [
      ]
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
th.vue-ads-text-left:hover, i.fa.fa-sort:hover, 
  i.fa.fa-sort-up:hover, i.fa.fa-sort-down:hover {
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
  // color: rgba(0, 0, 0, 0.54);
  font-feature-settings: "liga";
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
}
.fa.fa-plus-square::before, .fa.fa-minus-square::before {
  font-size: 22px;
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