import { v4 } from 'uuid';

export class Group {
  public readonly id: string;
  public name: string;
  public description: string;

  constructor(props: Omit<Group, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}
