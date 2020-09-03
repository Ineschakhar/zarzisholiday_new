<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Entity\Comment;
use App\Repository\UserRepository;
use App\Repository\ReservationRepository; 
use App\Form\CommentType; 
use App\Form\ReservationType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\AppartementRepository;
use App\Repository\CommentRepository; 
use App\Entity\Reservation; 
use Symfony\Component\Mailer\Bridge\Google\Smtp\GmailTransport;
use Symfony\Component\Mailer\Mailer; 
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email; 
use Symfony\Component\HttpFoundation\File\Exception\FileException;
/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }
    /**
     * @Route("/test/{id}", name="user_test", methods={"GET"})
     */ 
    public function test(User $user, Reservation $reservation): Response
    {
        return $this->render('user/test.html.twig', [
        'user' => $user,    
        'reservation' => $reservation,
  ]);
    } 
    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            //************** file upload ***>>>>>>>>>>>>
            /** @var file $file */ /* -> je dois ajouter * ici */
            $file = $form['image']->getData();
            if ($file) {
                $fileName = $this->generateUniqueFileName() . '.' . $file->guessExtension();
                // Move the file to the directory where brochures are stored
                try {
                    $file->move(
                        $this->getParameter('kernel.project_dir') . '/public/uploads',  // in Servis.yaml defined folder for upload images
                        $fileName
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                $user->setImage($fileName); // Related upload file name with Hotel table image field
            } 
            //<<<<<<<<<<<<<<<<<******** file upload ***********>

          
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/new.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @return string
     */
    private function generateUniqueFileName()
    {
        // md5() reduces the similarity of the file names generated by
        // uniqid(), which is based on timestamps
        return md5(uniqid());
    }

    /**
     * @Route("/reservation/{rid}", name="user_reservation_new", methods={"GET","POST"})
     */
    public function newreservation(Request $request, $rid, AppartementRepository $appartementRepository/* , \Swift_mailer $mailer */): Response
    {

        $appartement = $appartementRepository->findOneBy(['id' => $rid]);
 
        $days = $_REQUEST["days"];
        $checkin = $_REQUEST["checkin"];
        $checkout = Date("Y-m-d H:i:s", strtotime($checkin . " $days Day")); // Adding days to date
        $checkin = Date("Y-m-d H:i:s", strtotime($checkin . " 0 Day"));

        $data["total"] = $days * $appartement->getPrice();
        $data["days"] = $days;
        $data["checkin"] = $checkin;
        $data["checkout"] = $checkout;
        //  print_r($data);

        // die();

        $reservation = new Reservation();
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);


        $submittedToken = $request->request->get('token');
        if ($form->isSubmitted()) {
            if ($this->isCsrfTokenValid('form-reservation', $submittedToken)) {
                $entityManager = $this->getDoctrine()->getManager();

                //                dump($data);
                //                die();
                $checkin = date_create_from_format("Y-m-d H:i:s", $checkin); //Convert to datetime format
                $checkout = date_create_from_format("Y-m-d H:i:s", $checkout); //Convert to datetime format
                //                dump($data);
                //                die();
                $reservation->setCheckin($checkin);
                $reservation->setCheckout($checkout);
                $reservation->setStatus('New');
                $reservation->setIp($_SERVER['REMOTE_ADDR']);
                $reservation->setAppartementid($rid);
                $user = $this->getUser(); // Get login User data
                $reservation->setUserid($user->getId());
                $reservation->setDays($days);
                $reservation->setTotal($data["total"]);
                $reservation->setCreatedAt(new \DateTime()); // Get now datatime
                $entityManager->persist($reservation);
                $entityManager->flush();


/*Swift mailer*/
 /*    $message = (new \Swift_Message('Hello Email'))
        ->setFrom('ineschakhar@gmail.com')
        ->setTo('ineschakhar@gmail.com')
        ->setBody(
            $this->renderView( 'Your reservation has been successfully registered !')
        )
    ;
    $mailer->send($message);
    $this->addFlash('success', ' A vérification message was sent to your email');
  */
    /*Swift mailer */

      /*           //********** SEND EMAIL ***********************>>>>>>>>>>>>>>>
                $email = (new Email())
                    ->from($user->getEmail())
                    ->to($form['email']->getData())
                    //->cc('cc@example.com')
                    //->bcc('bcc@example.com')
                    //->replyTo('fabien@example.com')
                    //->priority(Email::PRIORITY_HIGH)
                    ->subject('reservation notification')
                    //->text('Simple Text')
                    ->html("Dear " . $form['name']->getData() . "<br>
                                 <p>We will evaluate your requests and contact you as soon as possible</p> 
                                 Thank You for your reservation <br> 
                                 =====================================================
                                 <br>" . $user->getNom() . "  <br>
                                 Address : " . $user->getAddress() . "<br>
                                 Phone   : " . $user->getPhone() . "<br>");

                /* $transport = new GmailTransport($user->getEmail(), $user->getPassword());
                $mailer = new Mailer($transport);
                $mailer->send($email); */

                //<<<<<<<<<<<<<<<<********** SEND EMAIL ***********************
                return $this->redirectToRoute('reservation_index');
            }
        }


        return $this->render('user/newreservation.html.twig', [
            'reservation' => $reservation,
            'appartement' => $appartement, 
            'data' => $data,
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/reservations", name="user_reservations", methods={"GET"})
     */ 
    public function reservations(ReservationRepository $reservationRepository): Response
    {
        $user = $this->getUser(); // Get login User data
        // $reservations=$reservationRepository->findBy(['userid'=>$user->getId()]);
        $reservations = $reservationRepository->getUserReservation($user->getId());
        // dump($reservations);
        // die();
        return $this->render('user/reservations.html.twig', [
            'reservations' => $reservations,
        ]);
    }
 
    /**
     * @Route("/reservation/{id}/show", name="user_reservation_show", methods={"GET"})
     */
        public function reservationshow($id, ReservationRepository $reservationRepository): Response
    {
        $user = $this->getUser(); // Get login User data
        // $reservations=$reservationRepository->findBy(['userid'=>$user->getId()]);
        $reservation = $reservationRepository->getReservation($id);
        // dump($reservations);
        // die();
        return $this->render('user/reservation_show.html.twig', [
            'reservation' => $reservation,
        ]);
    }
    /**
     * @Route("/apartements", name="user_appartements", methods={"GET"})
     */
    public function appartements(AppartementRepository $appartementRepository): Response
    {
        $user = $this->getUser(); // Get login User data

        return $this->render('user/appartements.html.twig', [
            'appartements' => $appartementRepository->findBy(['userid' => $user->getId()]),
        ]);
    }
    /**
     * @Route("/comments", name="user_comments", methods={"GET"})
     */
    public function comments(CommentRepository $commentRepository): Response
    {
        $user = $this->getUser();
        //echo $user->getId();
        //die();
        $comments = $commentRepository->getAllCommentsUser($user->getId());
        //dump($comments);
        //die();
        return $this->render('user/comments.html.twig', [
            'comments' => $comments,
        ]);
    }

    /**
     * @Route("/newcomment/{id}", name="user_new_comment", methods={"GET","POST"})
     */
    public function newcomment(Request $request, $id): Response
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        $submittedToken = $request->request->get('token');

        if ($form->isSubmitted()) {
            if ($this->isCsrfTokenValid('comment', $submittedToken)) {
                $entityManager = $this->getDoctrine()->getManager();

                $comment->setStatus('New');
                $comment->setIp($_SERVER['REMOTE_ADDR']);
                $comment->setAppartementid($id);
                $user = $this->getUser();
                $comment->setUserid($user->getId());

                $entityManager->persist($comment);
                $entityManager->flush();

                $this->addFlash('success', 'Your comment has been sent successfuly');
                return $this->redirectToRoute('appartement_show', ['id' => $id]);
            }
        }

        return $this->redirectToRoute('appartement_show', ['id' => $id]);
    }
    /**
     * @Route("/{id}", name="user_show", methods={"GET"})
     */

    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var file $file */ /* -> je dois ajouter * ici */
            $file = $form['image']->getData();
            if ($file) {
                $fileName = $this->generateUniqueFileName() . '.' . $file->guessExtension();
                // Move the file to the directory where brochures are stored
                try {
                    $file->move(
                        $this->getParameter('kernel.project_dir') . '/public/uploads',  // Servis.yaml de tanımladığımız resim yolu
                        $fileName
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }
                $user->setImage($fileName);
            }
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }
}