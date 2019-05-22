const path = require("path");

describe("TODOアプリ", () => {
  beforeEach(async () => {
    await page.goto("file://" + path.resolve(__dirname, "../index.html"));
    await page.waitForSelector("#todoList", { visible: false });
    await page.waitForSelector("#todoEmpty", { visible: true });
  });

  it("初期表示", async () => {
    await expect(page).toMatchElement(
      "#todoEmpty", { text: "タスクがありません" }
    );
    await expect(page).toMatchElement(
      "#nextTodo", { text: "次のTODO: (未登録)" }
    );
    await expect(page).toMatchElement(
      "#todoCount", { text: "(全0件)" }
    );
  });

  it("タスクの追加", async () => {
    await page.click("#addTodo");
    await page.waitForSelector("#todoList", { visible: true });
    await page.waitForSelector("#todoEmpty", { visible: false });
    await expect(page).toMatchElement(
      "#todoCount", { text: "(全1件)" }
    );
    await page.click("#addTodo");
    await expect(page).toMatchElement(
      "#todoCount", { text: "(全2件)" }
    );
  });

  it("タスクの入力", async () => {
    await page.click("#addTodo");
    await page.click("#addTodo");
    await page.type(".todo:nth-child(1) input", "サンプルタスク1");
    await page.type(".todo:nth-child(2) input", "サンプルタスク2");
    await expect(page).toMatchElement(
      "#nextTodo", { text: "次のTODO: サンプルタスク1" }
    );
  });

  it("タスクの削除", async () => {
    await page.click("#addTodo");
    await page.click("#addTodo");
    await page.type(".todo:nth-child(1) input", "サンプルタスク1");
    await page.type(".todo:nth-child(2) input", "サンプルタスク2");
    await page.click(".todo:nth-child(1) .delete");
    await expect(page).toMatchElement(
      "#nextTodo", { text: "次のTODO: サンプルタスク2" }
    );
    await page.click(".todo:nth-child(1) .delete");
    await page.waitForSelector("#todoList", { visible: false });
    await page.waitForSelector("#todoEmpty", { visible: true });
    await expect(page).toMatchElement(
      "#todoCount", { text: "(全0件)" }
    );
  });
});
