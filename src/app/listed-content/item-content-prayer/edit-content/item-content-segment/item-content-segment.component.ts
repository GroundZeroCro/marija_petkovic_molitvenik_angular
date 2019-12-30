import {Component, EventEmitter, Input, Output} from '@angular/core';
import ItemContent from '../../../shared/item-content';
import {SegmentedModel} from '../../segmented.model';

@Component({
  selector: 'app-item-content-segment',
  templateUrl: './item-content-segment.component.html',
  styleUrls: ['./item-content-segment.component.sass']
})
export class ItemContentSegmentComponent extends ItemContent {

  @Input() segmentedModel: SegmentedModel;
  @Output() removeSegmentedItemEvent = new EventEmitter();

  updateSegmentedItem($event: SegmentedModel) {
    this.segmentedModel = $event;
    this.changeEditMode();
  }

  removeSegmentedItem() {
    this.removeSegmentedItemEvent.emit(this.segmentedModel);
  }
}
