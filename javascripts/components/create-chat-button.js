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
          let Op;
          let Opp
          Op = fetch(`${url}.json`).then((result) => {
            /*result["post_stream"]["posts"][0]["username"]);*/
            Opp = 'Hi';
            console.log(Op);
            console.log(Opp);
            return 'hi';
          });
          return Op;
        } else {
          return;
        }
      }
    };
  });
});
