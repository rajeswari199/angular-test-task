import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  message = new FormControl('');
  showEmojiPicker = false;
  messages = [];

  addEmoji(event) {
    let selectionStart = document.querySelector('textarea').selectionStart
    this.message.setValue(this.message.value.substring(0, selectionStart) + event.emoji.native + ' ' + this.message.value.substring(selectionStart));
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker
  }

  closeEmojiPicker() {
    this.showEmojiPicker = false;
  }

  addMessage() {
    this.closeEmojiPicker()
    if (this.message.value.length > 0) {
      this.messages.push({ message: this.message.value, time: new Date() })
      this.message.reset('')
    }
  }

}
