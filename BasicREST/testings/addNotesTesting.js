pm.test("Response status code should have 201 value ", () => {

    pm.response.to.have.status(201);
});

pm.test("Response Content-Type header should have application/json value", ()=> {

    pm.expect(pm.response.headers.get("Content-Type")).to.equals("application/json; charset=utf-8");

});

pm.test("Response body should be an object ", ()=> {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an("object");
});

pm.test("Response body should have the correct property and value ", ()=> {
        const responseJson = pm.response.json();

        pm.expect(responseJson).to.have.ownProperty("status"); 
        pm.expect(responseJson.status).to.equals("success");

        pm.expect(responseJson).to.have.ownProperty("message");
        pm.expect(responseJson.message).to.equals("Catatan berhasil ditambahkan");

        pm.expect(responseJson).to.have.ownProperty("data");
        pm.expect(responseJson).to.be.an("object");
});

pm.test("Response body should have noteId property and not equal to empty", () => {

        const responseJson = pm.response.json();
        const {data} = responseJson;
        pm.expect(data).to.have.ownProperty("noteId");
        pm.expect(data.noteId).to.not.equals("");

        // Save the noteId to the environment
        pm.environment.set('noteId', data.noteId);

});

