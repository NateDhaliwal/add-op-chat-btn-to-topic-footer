import Component from "@glimmer/component";
import { apiInitializer } from "discourse/lib/api";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";


export default class CreateChatButton extends Component {
  @action
  async getOPPosterFromTopic() {
    ajax(window.location.href + ".json", { type: "GET" }).then((result) => return result["post_stream"]["posts"][0]["username"]);
  }
  <template>
    
  </template>
};
