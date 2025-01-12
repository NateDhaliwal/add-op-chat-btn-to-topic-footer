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
            return "chat"
        },
        translatedLabel() {
          return settings.topic_group_button_label;
        },
        translatedTitle() {
          return settings.topic_group_button_title;
        },
        action() {
            console.log(this);
        },
        displayed() {
            return true;
        },
        classNames: ["chat-with-op"],
        dependentKeys = [],
    });
});
