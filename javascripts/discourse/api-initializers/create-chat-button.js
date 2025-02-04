import { apiInitializer } from "discourse/lib/api";

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
            console.log(`This: ${this}, topicid: ${this.get("topic.id")}`);
            window.location.href = `/t/${this.get("topic.id")}`;
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
