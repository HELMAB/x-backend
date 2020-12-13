import XUserHeader from "./src/components/box/XUserHeader"

import XBox from "./src/components/box/XBox"
import XPanel from "./src/components/box/XPanel"
import XBoxInfo from "./src/components/box/XBoxInfo"
import XSmallBox from "./src/components/box/XSmallBox"

import XAlert from "./src/components/ui-elements/XAlert"
import XButton from "./src/components/ui-elements/XButton"
import XLoading from "./src/components/ui-elements/XLoading"
import XCallout from "./src/components/ui-elements/XCallout"
import XButtonGroup from "./src/components/ui-elements/XButtonGroup"
import XModal from "./src/components/ui-elements/XModal"

import XTimeline from "./src/components/timeline/XTimeline"
import XTimelineItem from "./src/components/timeline/XTimelineItem"
import XTimelineLabel from "./src/components/timeline/XTimelineLabel"
import XTimelineBadge from "./src/components/timeline/XTimelineBadge"

import XTab from "./src/components/tab/XTab"
import XTabMenu from "./src/components/tab/XTabMenu"

import XInput from "./src/components/form/XInput"
import XLabel from "./src/components/form/XLabel"
import XCheckBox from "./src/components/form/XCheckBox"
import XTextarea from "./src/components/form/XTextarea"
import XSelect from "./src/components/form/XSelect"

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.component('x-user-header', XUserHeader)

    Vue.component('x-box', XBox)
    Vue.component('x-panel', XPanel)
    Vue.component('x-box-info', XBoxInfo)
    Vue.component('x-small-box', XSmallBox)

    Vue.component('x-alert', XAlert)
    Vue.component('x-modal', XModal)
    Vue.component('x-button', XButton)
    Vue.component('x-loading', XLoading)
    Vue.component('x-callout', XCallout)
    Vue.component('x-button-group', XButtonGroup)

    Vue.component('x-timeline', XTimeline)
    Vue.component('x-timeline-item', XTimelineItem)
    Vue.component('x-timeline-label', XTimelineLabel)
    Vue.component('x-timeline-badge', XTimelineBadge)

    Vue.component('x-tab', XTab)
    Vue.component('x-tab-menu', XTabMenu)

    Vue.component('x-input', XInput)
    Vue.component('x-label', XLabel)
    Vue.component('x-check-box', XCheckBox)
    Vue.component('x-textarea', XTextarea)
    Vue.component('x-select', XSelect)
  }
}
