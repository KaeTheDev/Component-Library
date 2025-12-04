import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

function App() {
  const user = {
    id: "1",
    name: "Shakira Reid-Thomas",
    email: "shakira@starvingartistddllc.com",
    role: "CEO",
    avatarUrl: 'https://avatar.iran.liara.run/public'
  };

  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
      </UserProfileCard>
    </>
  );
}

export default App;