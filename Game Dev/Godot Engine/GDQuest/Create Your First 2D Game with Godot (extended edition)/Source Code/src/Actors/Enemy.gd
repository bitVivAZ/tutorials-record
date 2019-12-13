extends Actor

onready var stomp_area: Area2D = $StompDetector/CollisionShape2D

func _ready() -> void:
	set_physics_process(false)
	_velocity.x = -speed.x

func _on_StompDetector_body_entered(body: PhysicsBody2D) -> void:
	if body.global_position.y > stomp_area.global_position.y:
		return 
	die()

func die():
	stomp_area.disabled = true
	queue_free()
	
func _physics_process(delta: float) -> void:
	var snap: = Vector2.DOWN * 65.0 
	_velocity.y += gravity * delta
	_velocity.y = move_and_slide_with_snap(_velocity, snap, FLOOR_NORMAL).y
	_velocity.x *= -1 if is_on_wall() else 1
	