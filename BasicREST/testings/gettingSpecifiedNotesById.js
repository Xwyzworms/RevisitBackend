pm.test("Response status code should have 200", ()=> {
    pm.response.to.have.status(200);
})

pm.test("Response Content-Type header should have application/json value", ()=> {

    pm.expect(pm.response.headers.get("Content-Type")).to.equals("application/json; charset=utf-8");

})

pm.test("Response body should an object", ()=> {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an("object");
});

pm.test("Response body should have the correct property and value", ()=> {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.ownProperty("status");
    pm.expect(responseJson.status).to.equals("success");

    pm.expect(responseJson).to.have.ownProperty("message");
    pm.expect(responseJson.message).to.equals("Successfully getting the data");

    pm.expect(responseJson).to.have.ownProperty("data");
    pm.expect(responseJson.data).to.be.an("object");
});

pm.test("Response body should have note item", ()=> {
    const responseJson = pm.response.json();

    const {data} = responseJson;
    pm.expect(data).to.have.ownProperty("note");
    pm.expect(data.note).to.be.an("object");

});

pm.test("Response body data should contain correct value for id, title, body, and tags property", ()=> {
    const responseJson = pm.response.json();

    const {data : {note}} = responseJson;

    const expectedId = pm.environment.get("noteId");
    const expectedTitle = "Catatan A";
    const expectedTags = ["Android", "Web"];
    const expectedBody = "Isi dari catatan A";

    pm.expect(note).to.have.ownProperty("id");
    pm.expect(note.id).to.equals(expectedId);

    pm.expect(note).to.have.ownProperty("title");
    pm.expect(note.title).to.equals(expectedTitle);

    pm.expect(note).to.have.ownProperty("tags");
    pm.expect(note.tags).to.eql(expectedTags);

    pm.expect(note).to.have.ownProperty("body");
    pm.expect(note.body).to.equals(expectedBody);

});