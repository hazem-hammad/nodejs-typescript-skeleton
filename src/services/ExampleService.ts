import ExampleDTO from '../dtos/ExampleDTO';

export default class ExampleService {
  private examples: ExampleDTO[] = [];

  public getAll(): ExampleDTO[] {
    return this.examples;
  }

  public getById(id: string): ExampleDTO | undefined {
    return this.examples.find((example) => example.id === id);
  }

  public create(exampleDTO: ExampleDTO): ExampleDTO {
    const example = { ...exampleDTO, id: String(this.examples.length + 1) };
    this.examples.push(example);
    return example;
  }

  public update(id: string, exampleDTO: ExampleDTO): ExampleDTO | undefined {
    const index = this.examples.findIndex((example) => example.id === id);
    if (index !== -1) {
      const updatedExample = { ...exampleDTO, id };
      this.examples[index] = updatedExample;
      return updatedExample;
    }
    return undefined;
  }

  public delete(id: string): ExampleDTO | undefined {
    const index = this.examples.findIndex((example) => example.id === id);
    if (index !== -1) {
      const deletedExample = this.examples.splice(index, 1)[0];
      return deletedExample;
    }
    return undefined;
  }
}
