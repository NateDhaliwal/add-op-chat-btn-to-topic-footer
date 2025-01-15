import Component from "@glimmer/component";
import { apiInitializer } from "discourse/lib/api";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from "@ember/service";

export default apiInitializer("1.14.0", (api) => {
    api.registerTopicFooterButton({
        id: "chat-with-op",
        priority: 0,
        icon() {
            return "eye";
        },
        translatedLabel() {
          return settings.topic_group_button_label;
        },
        translatedTitle() {
          return settings.topic_group_button_title;
        },
        action() {
            console.log(`This: ${this}, topicid: ${this.get("topic.id")}`)
        },
        dropdown() {
          return this.site.mobileView;
        },
        classNames: ["chat-with-op"],
        dependentKeys: ["topic.id"],
        displayed() {
            return true;
        },
    });
});
