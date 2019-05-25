import path from "path";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("TODOアプリ", () => {
  beforeEach(async () => {
    await page.goto(`file://${path.resolve(__dirname, "../index.html")}`);
  });

  it("初期表示", async () => {
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  it("タスクの追加", async () => {
    await page.click("#addTodo");
    await page.click("#addTodo");
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  it("タスクの入力", async () => {
    await page.click("#addTodo");
    await page.click("#addTodo");
    await page.type(".todo:nth-child(1) input", "サンプルタスク1");
    await page.type(".todo:nth-child(2) input", "サンプルタスク2");
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  it("タスクの削除", async () => {
    await page.click("#addTodo");
    await page.click("#addTodo");
    await page.type(".todo:nth-child(1) input", "サンプルタスク1");
    await page.type(".todo:nth-child(2) input", "サンプルタスク2");
    await page.click(".todo:nth-child(1) .delete");
    await page.click(".todo:nth-child(1) .delete");
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
