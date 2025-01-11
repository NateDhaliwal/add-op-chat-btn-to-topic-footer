import Component from "@glimmer/component";
import { apiInitializer } from "discourse/lib/api";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from "@ember/service";

export default apiInitializer("1.14.0", (api) => {
  api.onPageChange((url, title) => {
    class CreateChatButton extends Component {
      @action
      getOPPosterFromTopic() {
        if (url.includes('/t/')) {
          fetch(url + ".json").then((result) => return result["post_stream"]["posts"][0]["username"]);
        } else {
          return;
        }
      }
      <template>
        <p>Hi</p>
        <DButton
          class="btn btn-primary btn-text"
          @action={{this.getOPPosterFromTopic}}
          @icon="eye"
          @label={{theme-prefix "chat_with_op"}}
        />
      </template>
    };
  });
});
