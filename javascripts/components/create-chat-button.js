import Component from "@glimmer/component";
import { apiInitializer } from "discourse/lib/api";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from "@ember/service";

export default apiInitializer("1.14.0", (api) => {
    class CreateChatButton extends Component {
      api.onPageChange((url, title) => {
        @action
        getOPPosterFromTopic() {
          
          if (url.includes('/t/')) {
            let Op;
            let Opp;
            Op = fetch(`${url}.json`).then((result) => {
              /*result["post_stream"]["posts"][0]["username"]);*/
              Opp = 'Hi';
              console.log(Op);
              console.log(Opp);
              return 'hi';
            });
            window.location.href=`/chat/new-message?recipients=${Op}`;
            return Op;
          } else {
            return;
          }
        }
      });
    };
});
